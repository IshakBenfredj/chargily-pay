import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function index() {
  const handlePress = () => {
    const options = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer test_sk_TuH24SnWwK55cLtM17z8B0qNOzbkYuySS1pPpP8l",
        "Content-Type": "application/json",
      },
      body: '{"amount":2000,"currency":"dzd","success_url":"https://your-cool-website.com/payments/success"}',
    };

    fetch("https://pay.chargily.net/test/api/v2/checkouts", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        router.push(response.checkout_url)
      })
      .catch((err) => console.error(err));
  };

  const ii = {
    amount: 2000,
    amount_without_discount: 0,
    chargily_pay_fees_allocation: "customer",
    checkout_url:
      "https://pay.chargily.dz/test/checkouts/01j4z5d06ky7fjbv7k95v25y22/pay",
    collect_shipping_address: 0,
    created_at: 1723327742,
    currency: "dzd",
    customer_id: null,
    deposit_transaction_id: null,
    description: null,
    discount: null,
    entity: "checkout",
    failure_url: null,
    fees: 0,
    fees_on_customer: 0,
    fees_on_merchant: 0,
    fulfillment_status: "unfulfilled",
    id: "01j4z5d06ky7fjbv7k95v25y22",
    invoice_id: null,
    livemode: false,
    locale: "ar",
    metadata: null,
    pass_fees_to_customer: null,
    payment_link_id: null,
    payment_method: null,
    shipping_address: null,
    status: "pending",
    success_url: "/success",
    updated_at: 1723327742,
    webhook_endpoint: null,
  };

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{ backgroundColor: "green", borderRadius: 10, padding: 10 }}
      >
        <Text style={{ color: "white", fontSize: 25 }}>Pay 2000 DA</Text>
      </TouchableOpacity>
    </View>
  );
}
