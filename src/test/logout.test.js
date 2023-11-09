import { logout } from "../js/api/auth/logout.js";
import * as storage from "../../storage/index.js";

describe('Logout', () => {
    it('Removes token from localStorage', () => {
        const mockRemove = jest.spyOn(storage, 'remove');
        logout();
        expect(mockRemove).toHaveBeenCalledWith('token');
        mockRemove.mockRestore();
    });
});