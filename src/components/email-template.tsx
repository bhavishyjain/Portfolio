import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: "#f4f4f5",
      padding: "40px 20px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#18181b",
          padding: "30px",
          textAlign: "center" as const,
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "600",
            margin: "0",
          }}
        >
          New Contact Form Submission
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: "40px 30px" }}>
        {/* From Section */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              color: "#71717a",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              margin: "0 0 8px 0",
            }}
          >
            From
          </p>
          <p
            style={{
              color: "#18181b",
              fontSize: "18px",
              fontWeight: "600",
              margin: "0",
            }}
          >
            {fullName}
          </p>
        </div>

        {/* Email Section */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              color: "#71717a",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              margin: "0 0 8px 0",
            }}
          >
            Email Address
          </p>
          <p
            style={{
              color: "#3b82f6",
              fontSize: "16px",
              margin: "0",
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                color: "#3b82f6",
                textDecoration: "none",
              }}
            >
              {email}
            </a>
          </p>
        </div>

        {/* Message Section */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              color: "#71717a",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              margin: "0 0 8px 0",
            }}
          >
            Message
          </p>
          <div
            style={{
              backgroundColor: "#f4f4f5",
              borderLeft: "4px solid #18181b",
              padding: "16px 20px",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                color: "#18181b",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0",
                whiteSpace: "pre-wrap" as const,
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#f4f4f5",
          padding: "20px 30px",
          borderTop: "1px solid #e4e4e7",
        }}
      >
        <p
          style={{
            color: "#71717a",
            fontSize: "13px",
            margin: "0",
            textAlign: "center" as const,
          }}
        >
          This message was sent from your portfolio contact form
        </p>
      </div>
    </div>
  </div>
);
