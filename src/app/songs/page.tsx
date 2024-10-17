import styles from "../page.module.css";
import SongSidebar from "../components/SongSidebar.tsx"
import SongView from "../components/SongView.tsx"
import SearchModal from "../components/SearchModal.tsx"
import { getAccessToken } from "../utils/get-access"
import { getSearchItems } from "../utils/get-search-items"

interface IMusicMarkers {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function MusicMarkers({
  searchParams,
}): React.FC<IMusicMarkers> {
    const accessToken = await getAccessToken();

    const songId = searchParams === undefined ? undefined : searchParams.id;
    const isSearching = searchParams === undefined ? undefined : searchParams.searching as boolean;
    const searchQuery = searchParams === undefined ? undefined : searchParams.search as boolean;

    // Run search here, pass parameter into both components
    // Not working yet because of caching
    const searchItems = await getSearchItems(accessToken, searchQuery);
    console.log(searchItems);

    return (
    <div className={styles.page}>
      <main className={styles.main}>
          <SongSidebar />
          <SongView />
          {isSearching && <SearchModal searchQuery={searchQuery}/>}
      </main>
    </div>
    );
}