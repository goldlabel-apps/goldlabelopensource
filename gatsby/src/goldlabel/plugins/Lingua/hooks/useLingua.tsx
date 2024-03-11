export const getTranslation = (slug: string, locale: string) => {
    const hasEntry = translations[slug]
    if (!hasEntry) return `No translation ${slug}`
    const hasTranslation = translations[slug][locale]
    if (!hasTranslation) return `No locale ${locale}, ${slug}`
    return translations[slug][locale]
}

export const translations: any = {
    HOME: {
        en: "Home",
        mt: "Dar",
        de: "Heim",
        cn: "家",
        it: "Casa",
        pi: "Smuggler's Den",
    },
    YOUR_ACCOUNT: {
        en: "Account",
        mt: "YourAccount",
        de: "YourAccount",
        cn: "YourAccount",
        it: "YourAccount",
        pi: "YourAccount",
    },
    YOUR_FINGERPRINT:{
        en: "Fingerprint",
        mt: "YOUR_FINGERPRINT",
        de: "YOUR_FINGERPRINT",
        cn: "YOUR_FINGERPRINT",
        it: "YOUR_FINGERPRINT",
        pi: "YOUR_FINGERPRINT",
    },
    GO: {
        en: "Start",
        mt: "Go",
        de: "Go",
        cn: "Go",
        it: "Go",
        pi: "Go",
    },
    DASHBOARD: {
        en: "Dashboard",
        mt: "Dashboard",
        de: "Dashboard",
        cn: "Dashboard",
        it: "Dashboard",
        pi: "Dashboard",
    },
    DELETE_ACCOUNT: {
        en: "Delete",
        mt: "DELETE_ACCOUNT",
        de: "DELETE_ACCOUNT",
        cn: "DELETE_ACCOUNT",
        it: "DELETE_ACCOUNT",
        pi: "DELETE_ACCOUNT",
    },
    SIGNOUT: {
        en: "Sign out",
        mt: "Iffirma",
        de: "Abmelden",
        cn: "登出",
        it: "Sign out",
        pi: "Sign out",
    },
    SIGNIN: {
        en: "Sign in",
        mt: "Idhol",
        de: "anmelden",
        cn: "登入",
        it: "Sign in",
        pi: "Sign in",
    },
    FORGOTPW: {
        en: "Forgot password?",
        mt: "Insejt il-password?",
        de: "Passwort vergessen?",
        cn: "忘记密码？",
        it: "Authorise",
        pi: "Forgot password?",
    },
    SIGNUP: {
        en: "Sign up",
        mt: "Irregistra",
        de: "Melden Sie sich an",
        cn: "报名",
        it: "Sign up",
        pi: "",
    },
}
