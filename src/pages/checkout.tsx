import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import { Modal, openModal } from "@redq/reuse-modal";
import { withApollo } from "helper/apollo";
import Checkout from "containers/Checkout/Checkout";
import { GET_LOGGED_IN_CUSTOMER } from "graphql/query/customer.query";
import { AuthContext } from "contexts/auth/auth.context"
import { ProfileProvider } from "contexts/profile/profile.provider";
import SignInALert from 'containers/Modal/SignInAlert'
import { useRouter } from "next/router";

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  const {
    authState: { isAuthenticated },
    authDispatch
  } = useContext<any>(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      openModal({
        show: true,
        overlayClassName: 'quick-view-overlay',
        closeOnClickOutside: false,
        component: () => <SignInALert />,
        closeComponent: "Close",
        transition: { duration: 0.1 },
        config: {
          enableResizing: false,
          disableDragging: true,
          className: 'quick-view-modal',
          width: 678,
          height: 'auto',
        }
      })
    }
  }, [null])

  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);

  if (loading) {
    return <div />;
  }
  if (error) return <div>{error.message}</div>;
  const token = true;

  return (
    <>
      <Head>
        <title>Thanh toán - spchinhhang</title>
      </Head>
      <ProfileProvider initData={data.me}>
        <Modal>
          {!isAuthenticated ? <div /> : <Checkout token={token} deviceType={deviceType} />}
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(CheckoutPage);
