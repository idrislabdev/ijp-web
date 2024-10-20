import axiosInstance from "../utils/axios"

export const getLiverateMini = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/mini`)
    return resp
}

export const getLiverateHighlights = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/highlights`)
    return resp
}

export const getLiverates = async () => {
    const resp = await axiosInstance.get(`/v2/liverate`)
    return resp
}

export const getStakings = async () => {
    const resp = await axiosInstance.get(`/v2/staking`)
    return resp
}