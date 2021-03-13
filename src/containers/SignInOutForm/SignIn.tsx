import React, { useContext } from 'react';
import {
  LinkButton,
  Button,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Input,
  Divider,
  Row,
  Text,
  Decription
} from './SignInOutForm.style';
import { Facebook, Google, NextLogin } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import Image from 'components/Image/Image';
import Link from 'next/link';
import { marginBottom } from 'styled-system';
import Image_Shopping from '../../image/shopping.png';
import { bool } from 'yup';

export default function SignInModal({ deviceType, ...props }) {
  const { authDispatch } = useContext<any>(AuthContext);
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS'
    });
  };

  const loginCallback = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', `${email}.${password}`);
      authDispatch({ type: 'SIGNIN_SUCCESS' });
      closeModal();
    }
  };

  return (
    <Row>
      {deviceType.mobile ?
        '' : (
          <div className="col-12 col-md-6 text-center m-auto banner-left">
            <div className='mx-4'>
              <div>
                <img src={Image_Shopping} alt="shopping"/>
              </div>
              <div className='mt-5' style={{ margin: '0px 12px' }}>
                <h4 className='bold' style={{ lineHeight: '20px' }}>Đăng nhập</h4>
                <Decription className='mt-2'>Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận
                  nhiều ưu đãi hấp dẫn.</Decription>
              </div>
            </div>
          </div>
        )
      }

      <div className="col-12 col-md-6" style={{ borderLeft: ' 1px solid #E8E9EF' }}>
        <Wrapper>
          <Container>
            {/* <LogoWrapper>
          <Image url={spchinhhang} />
        </LogoWrapper> */}
            <Heading className="bold">
              <FormattedMessage
                id="welcomeBack"
                defaultMessage="Tài khoản của tôi"
              />
            </Heading>
            {/* <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading> */}
            <form onSubmit={loginCallback}>
              <FormattedMessage
                id="emailAddressPlaceholder"
                defaultMessage="Email Address."
              >
                {(placeholder) => (
                  <Input
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                )}
              </FormattedMessage>

              <FormattedMessage
                id="passwordPlaceholder"
                defaultMessage="Password (min 6 characters)"
              >
                {(placeholder) => (
                  <Input
                    type="password"
                    placeholder={placeholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                )}
              </FormattedMessage>

              <Button
                className='icon-right'
                fullwidth
                title={'Đăng nhập'}
                intlButtonId="continueBtn"
                type="submit"
                style={{ color: '#fff' }}
                icon={<NextLogin/>}
                iconPosition="right"

              />
            </form>
            <div className="my-4">
              <Text>
                Quên mật khẩu?{' '}
                <Link href="forgot-password"><a style={{ textDecoration: 'underline' }}>Lấy lại mật khẩu tại
                  đây</a></Link>{' '}
              </Text>
              <br/>
              <Text>Hoặc đăng nhập tại đây</Text>
            </div>

            <Button
              fullwidth
              title={'Continue with Facebook'}
              className="facebook icon-left"
              icon={<Facebook/>}
              iconPosition="left"
              iconStyle={{ color: '#ffffff', marginRight: 5 }}
              intlButtonId="continueFacebookBtn"
              onClick={loginCallback}
              style={{ color: '#fff' }}
            />
            <Button
              fullwidth
              title={'Continue with Google'}
              className="google icon-left"
              icon={<Google/>}
              iconPosition="left"
              iconStyle={{ color: '#ffffff', marginRight: 5 }}
              intlButtonId="continueGoogleBtn"
              onClick={loginCallback}
              style={{ color: '#fff' }}
            />
            <hr style={{ height: 0, background: '#DDDDDD' }}/>
            <Offer className='mb-3 text-left'>
              {/* <FormattedMessage
            id="dontHaveAccount"
            defaultMessage="Don't have any account?"
          />{' '} */}
              <Text>
                Bạn đã có tài khoản tại <strong>spchinhhang?</strong>{' '}
              </Text>
              {/* <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
          </LinkButton> */}
            </Offer>
            <Button
              fullwidth
              title={'Đăng kí miễn phí'}
              className="sign-up-free bold mb-4"
              style={{ color: '#000' }}
            />
          </Container>

          {/* <OfferSection>
        <Offer>
          <FormattedMessage
            id="forgotPasswordText"
            defaultMessage="Forgot your password?"
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id="resetText" defaultMessage="Reset It" />
          </LinkButton>
        </Offer>
      </OfferSection> */}
        </Wrapper>
      </div>
    </Row>

  );
}
