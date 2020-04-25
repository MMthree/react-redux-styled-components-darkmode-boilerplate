import React from 'react'

const Moon = ({ size, fill }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101.082 116.932C69.562 85.39 61.103 39.828 75.062 0.389999C59.812 5.785 45.394 14.223 33.208 26.41C-10.543 70.16 -10.543 141.077 33.208 184.805C76.937 228.535 147.833 228.557 191.582 184.805C203.811 172.619 212.228 158.201 217.603 142.951C178.188 156.91 132.604 148.451 101.082 116.932Z" fill={fill}/>
        </svg>
    )
}

export default Moon
