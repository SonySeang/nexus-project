"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

function FormButton({ actionType, type }) {
  return (
    <Button>
      {actionType === "create" ? "Create" : "Update"}

    </Button>
  );
}

export default FormButton;
