import { logout } from "../js/api/auth/logout.js";

global.localStorage = {
    removeItem: () => { },
};

describe("logout function", () => {
    it("should remove the token from local storage", () => {
        const removeItemMock = jest.spyOn(global.localStorage, 'removeItem').mockImplementation(() => { });

        logout();

        expect(removeItemMock).toHaveBeenCalledWith("token");

        removeItemMock.mockRestore();
    });
});