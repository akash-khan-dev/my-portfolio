import "./style/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Akash Portfolio",
  description: "Create By Akash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
