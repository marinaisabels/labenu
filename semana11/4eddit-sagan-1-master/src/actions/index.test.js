import { setPost, setPostDetails, setPostIdForDetails } from './index';

//Teste ações síncronas
describe("Index Action-Creators", () => {
    test("Set Post List", () => {
        const mockListPost = "Primeiro Teste";
        const mockedAction = setPost(mockListPost)

        expect(mockedAction.type).toEqual("SET_POST_LIST");
        expect(mockedAction.payload.listPost).toBeDefined();
        expect(mockedAction.payload.listPost).toEqual(mockListPost);
    })
    test("Set Post Details", () => {
        const mockPost = "Segundo";
        const mockedAction = setPostDetails(mockPost)

        expect(mockedAction.type).toEqual("SET_POST_DETAILS");
        expect(mockedAction.payload.post).toBeDefined();
        expect(mockedAction.payload.post).toEqual(mockPost);
    })
    test("Set Post Id For Details", () => {
        const mockPostId = "123";
        const mockedAction = setPostIdForDetails(mockPostId)

        expect(mockedAction.type).toEqual("SET_POST_ID_FOR_DETAILS");
        expect(mockedAction.payload.postId).toBeDefined();
        expect(mockedAction.payload.postId).toEqual(mockPostId);
    })

})