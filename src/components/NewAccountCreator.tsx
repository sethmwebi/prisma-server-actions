"use client";
import { FC, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createAccount } from "@/actions";

interface NewAccountCreatorProps {}

const NewAccountCreator: FC<NewAccountCreatorProps> = ({}) => {
  const [editMode, setEditMode] = useState(false);

  if (!editMode)
    return (
      <button className="text-left" onClick={() => setEditMode(true)}>
        + New Account
      </button>
    );

  return (
    <form
      action={createAccount}
      className="flex flex-wrap gap-1"
      onSubmit={() => setEditMode(false)}
    >
      <Input
        type="text"
        name="name"
        placeholder="Account Name"
        className="text-slate-900"
      />
      <Button type="submit">Create</Button>
      <Button onClick={() => setEditMode(false)}>Cancel</Button>
    </form>
  );
};

export default NewAccountCreator;
