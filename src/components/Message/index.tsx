import { Alert } from 'react-bootstrap';

const Message = ({ variant, children } : any) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
