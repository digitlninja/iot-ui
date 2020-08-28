import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';

import classnames from 'classnames';
import {
    Button,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from 'reactstrap';

import useForgotPasswordMutation from '../graphql/useForgotPasswordMutation';
import { usernameOrEmailRules } from '../validation-rules';
import { isGraphQLErrorResult } from '../../../helpers';

const initialState = {
    username: '',
    userNameError: '',
    requestErrors: [],
};

const ForgotPasswordForm = () => {
    let history = useHistory();
    const [
        forgotPasswordMutation,
        {loading, data},
    ] = useForgotPasswordMutation();
    const {
        register,
        handleSubmit,
        formState,
        errors: formErrors,
        reset,
    } = useForm();

    const [state, setState] = useState(initialState);
    const [focusedUsername, setFocusedUsername] = useState(false);

    const flashErrorToState = (error) => {
        setState({
            ...state,
            requestErrors: error.messages || [error.message],
        });
        setTimeout(() => setState({...state, requestErrors: []}), 4000);
    };

    const onSubmit = async (formData) => {
        try {
            const {data} = await forgotPasswordMutation({
                variables: {username: formData.username},
            });
            reset();
            if (isGraphQLErrorResult(data.forgotPassword)) {
                flashErrorToState(data.forgotPassword);
                return;
            }
            history.push(`/confirm-password/${formData.username}`);
        } catch (error) {
            console.error({error});
            history.push('/error');
            return;
        }
    };

    return (
        <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup
                    className={classnames('mb-3', {
                        focused: focusedUsername,
                    })}
                >
                    <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-single-02"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Username or email"
                            type="text"
                            name="username"
                            autoComplete="username"
                            onFocus={() => setFocusedUsername(true)}
                            onBlur={() => setFocusedUsername(false)}
                            innerRef={register(usernameOrEmailRules)}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    {!loading &&
                    data &&
                    data.forgotPassword &&
                    data.forgotPassword.email && (
                        <div className="mt-2 pl-1">
                            <small className="text-success">
                                If you have an account with us, an email has been sent to{' '}
                                {data.forgotPassword.email}.
                            </small>
                        </div>
                    )}
                    {state.requestErrors.length > 0 && (
                        <div className="mt-2 pl-1">
                            {state.requestErrors.map((error) => (
                                <small key={error} className="text-danger">
                                    {error}
                                </small>
                            ))}
                        </div>
                    )}
                </FormGroup>
                <div className="text-center">
                    <Button
                        className="my-4"
                        color="info"
                        type="submit"
                        disabled={
                            loading ||
                            Object.keys(formErrors).length > 0 ||
                            !formState.isDirty
                        }
                    >
                        {loading && (
                            <Loader
                                type="TailSpin"
                                color="#fff"
                                height={16}
                                width={16}
                                radius={5}
                                className="mr-2 float-left"
                            />
                        )}
                        Submit
                    </Button>
                </div>
                <Row className="mt-3">
                    <Col xs="6">
                        <Link className="text-muted" to="/login">
                            <small>Back to Login</small>
                        </Link>
                    </Col>
                    <Col className="text-right" xs="6">
                        <Link className="text-muted" to="/register">
                            <small>Create new account</small>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    );
};

export default ForgotPasswordForm;
