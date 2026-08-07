import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 88,
          color: "#ffffff",
        }}
      >
        MO.
      </div>
    ),
    size
  );
}
