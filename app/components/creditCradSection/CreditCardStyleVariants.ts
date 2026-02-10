export const cardStyles = {
    1:{
        bg: "bg-linear-to-t from-gray-700 to-blue-800"
    },
    2:{
        bg: "bg-linear-to-t from-yellow-800 to-blue-800"
    },
    3:{
        bg: "bg-linear-to-t from-gray-900 to-blue-900"
    }
}

export type cardStyle =  keyof typeof cardStyles