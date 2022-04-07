export const SIGN_IN = 'SIGN_IN';

export const signingAction = isSigned => ({
    type: SIGN_IN,
    payload: isSigned,
});
