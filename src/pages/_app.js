import "@/styles/globals.css";
import "antd/dist/reset.css"; // 스타일 초기화
import { ConfigProvider } from "antd";
import AppLayout from "../components/layout";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const layoutProps = {
    "/account/login": { hasHeader: false, hasFooter: false },
    // 필요한 경로와 속성 추가
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3674B5",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          borderRadius: 8,
          fontSize: 16,
        },
        components: {
          Layout: {
            headerBg: "#fff",
            bodyBg: "#fff",
          },
        },
      }}
    >
      <AppLayout {...(layoutProps[pathname] || {})}>
        <Component {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
}
