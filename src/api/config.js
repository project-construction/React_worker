const BASE_URL = "http://localhost:8080"

export const API = {
    LOGIN : `${BASE_URL}/auth/login`,
    REGISTER : `${BASE_URL}/auth/signup`,
    SURVEY_UPDATE : `${BASE_URL}/survey/update`,
    SURVEY_CHECK : `${BASE_URL}/survey/check`,
    RECODE_RESULT : `${BASE_URL}/unityContent/insertContent`,
}
