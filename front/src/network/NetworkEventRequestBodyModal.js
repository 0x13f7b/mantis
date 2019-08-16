/**
 * @flow strict
 * @format
 */
import * as React from 'react';
import ReactJson from 'react-json-view';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

type Props = {|
  data: any,
  isOpen: boolean,
  toggle: (e: SyntheticEvent<HTMLButtonElement>, networkEvent: ?{}) => void,
|};
type State = {||};

class NetworkEventRequestBodyModal extends React.Component<Props, State> {
  render() {
    const { isOpen, toggle, data = {} } = this.props;
    const requestBody = data.requestBody && data.requestBody.body ? data.requestBody.body : {};
    return (
      <Modal isOpen={isOpen} toggle={toggle} className={'requestBodyModal'}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <ReactJson src={requestBody} />
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NetworkEventRequestBodyModal;
