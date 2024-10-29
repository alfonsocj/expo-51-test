import { registerRootComponent } from 'expo';

// import * as ExpoSplashScreen from 'expo-splash-screen';
// import { DEBUG_COLD_LOAD } from ':rn/shared/performance/performanceDebugging';
import App from './App';
// import { PlaybackService } from './src/services/PlaybackService';

// Ensure splash remains visible until dismissed in useCleanupSplash
// if (!DEBUG_COLD_LOAD) {
//   ExpoSplashScreen.preventAutoHideAsync();
// }

registerRootComponent(App);
// TrackPlayer.registerPlaybackService(() => PlaybackService);
