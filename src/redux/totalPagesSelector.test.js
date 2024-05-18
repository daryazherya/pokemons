import { totalPagesSelector } from "./totalPagesSelector";
test("check totalPages", () => {
    const state = {
        pagination: {
            pageSize: 10,
            pageNumber: 0,
            count: 95,
        },
    };
    expect(totalPagesSelector(state)).toEqual(10);
});

test("check totalPages with count = 105", () => {
    const state = {
        pagination: {
            pageSize: 10,
            pageNumber: 0,
            count: 105,
        },
    };
    expect(totalPagesSelector(state)).toEqual(11);
});
