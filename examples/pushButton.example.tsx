import { PushButton } from "../lib/PushButton";
import { JsCadFixture } from "jscad-fiber";

export default () => {
  return (
    <JsCadFixture zAxisUp showGrid>
      <PushButton />
    </JsCadFixture>
  );
};