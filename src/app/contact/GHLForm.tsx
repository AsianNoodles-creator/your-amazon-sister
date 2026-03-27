"use client";

import { useEffect } from "react";

export default function GHLForm() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/yrITo3kUmUqmdPU5cbcZ"
      style={{ width: "100%", height: 612, border: "none", borderRadius: 3 }}
      id="inline-yrITo3kUmUqmdPU5cbcZ"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Opt-in Form"
      data-height="612"
      data-form-id="yrITo3kUmUqmdPU5cbcZ"
      title="Opt-in Form"
    />
  );
}
