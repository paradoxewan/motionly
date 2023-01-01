import { TemplateType } from "@asius/types";
import axios from "axios";
import { baseUrl } from "../../consts";

export type PostNewTemplateInput = TemplateType;
export type PostNewTemplateOutput = TemplateType;

export const postNewTemplate = async (
  input: PostNewTemplateInput
): Promise<PostNewTemplateOutput | null> => {
  try {
    const result = await axios.post(`${baseUrl}/api/templates/new`, input);
    return result.data;
  } catch (e) {
    return null;
  }
};
