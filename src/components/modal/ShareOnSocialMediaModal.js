/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const ShareOnSocialMediaModal = ({ isOpen, toggle, referralLink }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Share on Social Media</ModalHeader>
      <ModalBody>
        <p>Share your referral link on your social media profiles:</p>
        <div className="share-icons">
          <FacebookShareButton className='mr-2' url={referralLink}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton className='mr-2' url={referralLink}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton className='mr-2' url={referralLink}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ShareOnSocialMediaModal;
