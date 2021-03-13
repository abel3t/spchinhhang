import React from "react";
import Head from "next/head";
import OrderRecivedPage from "containers/OrderReceived/OrderReceived";
import { withApollo } from "helper/apollo";

class OrderRecived extends React.Component<any> {
  public render() {
    return (
      <>
        <Head>
          <title>Invoice - spchinhhang</title>
        </Head>
        <OrderRecivedPage />
      </>
    );
  }
}

export default withApollo(OrderRecived);
