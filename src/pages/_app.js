import "@/styles/globals.css";
import "antd/dist/reset.css"; // 스타일 초기화
import { ConfigProvider, theme } from "antd";
import AppLayout from "@/components/layout";
import { Header } from "antd/es/layout/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff", // 기본 Primary 색상
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          borderRadius: 8, // 버튼 등 요소의 기본 테두리 반경
          fontSize: 16, // 기본 글자 크기
        },
        components: {
          Layout: {
            headerBg: "#fff",
          },
        },
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
}
