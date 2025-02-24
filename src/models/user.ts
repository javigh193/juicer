export type UserProfileToken = {
    userName: string
    token: string
    refresh_token: string
}

export type UserProfile = {
    userName: string | undefined
}

export type RefreshTokenResponse = {
    token: string
}