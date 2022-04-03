export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';

export const signingInAction = () => ({
    type: SIGN_IN,
});
export const loggingOutAction = () => ({
    type: LOG_OUT,
});
