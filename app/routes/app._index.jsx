import React from "react";

import { useAppBridge } from "@shopify/app-bridge-react";
import { Button } from '@shopify/polaris';


const Home = () => {
  // const app = createApp({
  //   apiKey: "68959503681b721a4c65fe9a193f0598",
  // });
  // const sessionToken = getSessionToken(app);
  const app = useAppBridge();

  const fetchData = async () => {
    try {
      // Sử dụng await để chờ kết quả trả về từ hàm shopify.idToken()
      const idToken = await app.idToken();
      console.log("id_token: ", idToken);
      open(`http://localhost:3000/auth?token=${idToken}`, "_top");
    } catch (error) {
      console.error("Lỗi khi lấy idToken:", error);
    }
  };

  return (
    <div style={{
      border: '1px soild black'
    }}>
      <Button onClick={() => fetchData()} variant="primary" tone="critical">
        Connect Windoo
      </Button>
      {/* <button onClick={() => fetchData()}>Connect</button>{" "} */}
    </div>
  );
};

export default Home;
