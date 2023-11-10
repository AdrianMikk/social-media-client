import { login } from "../js/api/auth/login.js";

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "1337" }),
        statusText: "OK",
    })
);

const mockStorage = (() => {
    let store = {};
    return {
        getItem(key) {
            return store[key];
        },
        setItem(key, value) {
            store[key] = value.toString();
        },
        clear() {
            store = {};
        },
    };
})();

Object.defineProperty(global, "localStorage", { value: mockStorage });

describe("login", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Stores token from localStorage", async () => {
        const email = "MockMail@example.com";
        const password = "mockPassword";

        await login(email, password);

        const token = JSON.parse(localStorage.getItem("token"));
        expect(token).toBe("1337");
    });
});
