import { Row } from  'antd'
import { RowProps } from 'antd'


const DefaultRow = ({gutter=[10, 10], children, ...rest}: RowProps) => {
    return (
        <Row {...rest} gutter={gutter}>
            {children}
        </Row>
    );
}

export default DefaultRow;