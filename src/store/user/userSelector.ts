import { RootState } from "..";
import { User } from "../../utils/types/authTypes";

export const getUser = (state: RootState): User | null => state.user.user