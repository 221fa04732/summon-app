import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { PostHogRouter } from "@/components/PostHogRouter";

export const RootRoute = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <BaseLayout>
      <PostHogRouter />
      <Outlet />
    </BaseLayout>
  );
}
