import React from "react";

const PasswordStrengthIndicator = ({ passwordStrength, password }) => {
  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "text-danger";
    if (passwordStrength === 1) return "text-warning";
    if (passwordStrength >= 2 && password.length > 6) return "text-success";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "weak";
    if (passwordStrength === 1) return "fair";
    if (passwordStrength >= 2) return "strong";
    if (passwordStrength >= 4) return "very strong";
  };

  return (
    <div className="text-muted font-italic pl-1 mt-2">
      <small>
        Password strength:{" "}
        <span className={`text-strong ${getPasswordStrengthColor()}`}>
          <strong>{getPasswordStrengthText()}</strong>
        </span>
      </small>
    </div>
  );
};

export default PasswordStrengthIndicator;
