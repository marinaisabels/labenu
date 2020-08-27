import posts from "./posts";
import { setPost, setPostDetails, setPostIdForDetails } from "../actions/index"


const mockStore = {
    postList: [],
}
describe("Posts Reducer", () => {
    test("SET_POST_LIST", () => {
        const mockText = "Primeiro Teste"
        const newSetPostAction = setPost(mockText)
        const newStore = posts(mockStore, newSetPostAction)

        expect(newStore.postList).toHaveLength(1)
        expect(newStore.postList[0].completed).toBe(false);
        expect(newStore.postList[0].text).toBe(mockText)
        expect(newStore.postList[0].id).toBeDefined()
    })
    test("SET_POST_DETAILS", () => {
        const mockId = "Primeiro Teste"
        const newSetPostDetailsAction = setPostDetails(mockId)
        const newStore = posts(mockStore, newSetPostDetailsAction)

        expect(newStore.postList).toHaveLength(0)
        expect(newStore.postList[0].completed).toBe(true);
        
    })
    test("SET_POST_ID_FOR_DETAILS", () => {
        const mockId = "1"
        const newSetPostIdAction = setPostIdForDetails(mockId)
        const newStore = posts(mockStore, newSetPostIdAction)

        expect(newStore.postList).toHaveLength(0)
        expect(newStore.postList[0].completed).toBe(false);
        expect(newStore.postList[0].id).toBeDefined()
    })
})