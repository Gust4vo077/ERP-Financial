import { Typography } from "antd"
import { TitleProps } from "antd/es/typography/Title"


const Topic = ({children, level, ...rest}:TitleProps) => {

    return (
        <Typography.Title level={level ? level : 3}  {...rest}>
            {children}
        </Typography.Title>
    )

}

export default Topic;