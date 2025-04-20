import { App } from "cdktf";
import * as dotenv from "dotenv";
import { MyStack } from "./lib/stack";

dotenv.config();

const { PROJECT_ID, REGION } = process.env;

const app = new App();

new MyStack(app, "agent-api", {
  projectId: PROJECT_ID as string,
  region: REGION as string,
  imageRepoName: "agent-api-repo",
  imageName: "agent-api",
});

app.synth();
