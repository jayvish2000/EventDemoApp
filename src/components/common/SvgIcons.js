import { Path, Svg } from 'react-native-svg'
import { width } from '../../utils/Dimensions'

const SvgIcons = ({ name, size, color }) => {

    switch (name) {
        case 'back': return (
            <Svg
                width={size || width * .06}
                height={size || width * .06}
                viewBox="0 0 1024 1024"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path fill={color || "#666666"} d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
                <Path
                    fill={color || "#666666"}
                    d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
                />
            </Svg>
        )

        case 'logout': return (
            <Svg
                width={size || width * .06}
                height={size || width * .06}
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    stroke={color || "#666666"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 12-4-4m4 4-4 4m4-4H9m5 9a9 9 0 1 1 0-18"
                />
            </Svg>
        )

        default:
            break;
    }

}
export default SvgIcons