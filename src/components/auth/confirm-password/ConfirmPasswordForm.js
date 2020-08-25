import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
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
import useConfirmPasswordMutation from '../graphql/useConfirmPasswordMutation';
import { usernameOrEmailRules, passwordRules } from '../validation-rules';
import { isGraphQLErrorResult } from '../../../helpers';

const initialState = {
    username: '',
    userNameError: '',
    requestErrors: [],
    codeResent: false,
};

const ConfirmPasswordForm = () => {
    const {push} = useHistory();
    let {username: paramUsername} = useParams();
    const [
        confirmPasswordMutation,
        {loading, data},
    ] = useConfirmPasswordMutation();

    const [forgotPasswordMutation] = useForgotPasswordMutation();

    const {
        register,
        handleSubmit,
        formState,
        errors: formErrors,
        reset,
        watch,
    } = useForm();

    const [state, setState] = useState(initialState);
    const [focusedUsername, setFocusedUsername] = useState(false);
    const [focusedVerificationCode, setFocusedVerificationCode] = useState(false);
    const [focusedNewPassword, setFocusedNewPassword] = useState(false);
    const [focusedConfirmNewPassword, setFocusedConfirmNewPassword] = useState(
        false
    );
    const passwordValue = watch('newPassword');
    const usernameValue = paramUsername || watch('username');

    const flashErrorToState = (error) => {
        setState({
            ...state,
            requestErrors: error.messages || [error.message],
        });
        setTimeout(() => setState({...state, requestErrors: []}), 4000);
    };

    const flashResentCodeSuccessToState = () => {
        setState({
            ...state,
            codeResent: true,
        });
        setTimeout(() => setState({...state, codeResent: false}), 4000);
    };

    const onSubmit = async (formData) => {
        try {
            const {username, verificationCode, newPassword} = formData;
            const {data} = await confirmPasswordMutation({
                variables: {
                    username,
                    newPassword,
                    verificationCode,
                },
            });
            if (isGraphQLErrorResult(data.confirmPassword)) {
                flashErrorToState(data.confirmPassword);
                return;
            }
            setTimeout(() => push('/login'), 4000);
        } catch (error) {
            console.error({error});
            push('/error');
        }
    };

    const onResendClick = async () => {
        try {
            const {data} = await forgotPasswordMutation({
                variables: {username: usernameValue || ''},
            });
            reset();
            if (isGraphQLErrorResult(data.forgotPassword)) {
                flashErrorToState(data.forgotPassword);
                return;
            }
            flashResentCodeSuccessToState();
        } catch (errors) {
            console.error({errors});
            push('/error');
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
                            autocomplete="username"
                            onFocus={() => setFocusedUsername(true)}
                            onBlur={() => setFocusedUsername(false)}
                            innerRef={register(usernameOrEmailRules)}
                            defaultValue={paramUsername || ''}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup
                    className={classnames('mb-3', {
                        focused: focusedVerificationCode,
                    })}
                >
                    <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-key-25"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Verification code"
                            type="text"
                            name="verificationCode"
                            onFocus={() => setFocusedVerificationCode(true)}
                            onBlur={() => setFocusedVerificationCode(false)}
                            innerRef={register()}
                        />
                    </InputGroup>
                </FormGroup>
                <small className="ml-1 d-inline-block">
                    Please enter the code sent to your email.
                </small>
                <small className="ml-1 mb-3 d-inline-block font-italic">
                    <b>Didn't receive it?</b>
                    <button
                        className="link ml-2 font-italic"
                        type="button"
                        onClick={(formData) => onResendClick(formData)}
                        disabled={!usernameValue}
                    >
                        Resend (input your username first)
                    </button>
                </small>
                {state.codeResent && (
                    <div className="ml-1 mb-3">
                        <small className="text-success">
                            We've sent another code to your email.
                        </small>
                    </div>
                )}
                <FormGroup
                    className={classnames('mb-3', {
                        focused: focusedNewPassword,
                    })}
                >
                    <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-lock-circle-open"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="New password"
                            type="password"
                            name="newPassword"
                            autocomplete="new-password"
                            onFocus={() => setFocusedNewPassword(true)}
                            onBlur={() => setFocusedNewPassword(false)}
                            innerRef={register(passwordRules)}
                        />
                    </InputGroup>
                    {formErrors && formErrors.newPassword && (
                        <div className="mt-2">
                            <small className="text-danger">
                                Your password must have lowercase and uppercase letters, numbers
                                and symbols.
                            </small>
                        </div>
                    )}
                </FormGroup>
                <FormGroup
                    className={classnames('mb-3', {
                        focused: focusedConfirmNewPassword,
                    })}
                >
                    <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-lock-circle-open"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Confirm password"
                            type="password"
                            name="confirmNewPassword"
                            onFocus={() => setFocusedConfirmNewPassword(true)}
                            onBlur={() => setFocusedConfirmNewPassword(false)}
                            innerRef={register({
                                ...passwordRules,
                                validate: (value) => value === passwordValue,
                            })}
                        />
                    </InputGroup>
                    {formErrors && formErrors.confirmNewPassword && (
                        <div className="mt-2">
                            <small className="text-danger">Your passwords must match.</small>
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    {state.requestErrors && state.requestErrors.length > 0 && (
                        <div className="mt-2 pl-1">
                            {state.requestErrors.map((error) => (
                                <small key={error} className="text-danger">
                                    {error}
                                </small>
                            ))}
                        </div>
                    )}
                    {data &&
                    data.confirmPassword &&
                    data.confirmPassword &&
                    data.confirmPassword.username && (
                        <div className="mt-2 pl-1">
                            <small className="text-success">
                                Congratulations {data.confirmPassword.username}. You've
                                successfully reset your password, taking you to login...
                            </small>
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
            </Form>
            <Row className="mt-3">
                <Col className="text-left" xs="6">
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
        </CardBody>
    );
};

export default ConfirmPasswordForm;
