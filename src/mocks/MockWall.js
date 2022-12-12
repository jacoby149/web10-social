import mockFeed from "./MockFeed";

// only take the posts that have my name for the wall.
const mockWall = mockFeed.filter((post)=>post.name==="Jacob Hoffman")

export default mockWall;