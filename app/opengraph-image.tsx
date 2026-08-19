import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CESAR_PHONE_DISPLAY } from "@/lib/site-config";

export const alt = "César Fernández — Taller de Mecánica de Motos en Tarapoto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori (next/og) only understands plain <img>, not next/image */}
          <img
            src={logoSrc}
            alt=""
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              border: "4px solid #dc2626",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              César Fernández
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 700,
                color: "#dc2626",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              Taller de motos · Tarapoto
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "#e4e4e7",
                marginTop: 8,
              }}
            >
              20 años de experiencia · Mantenimiento · Reparación · Repuestos
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>
            WhatsApp: {CESAR_PHONE_DISPLAY}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
