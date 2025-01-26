import "./assets/app.css";
import { LocalStorageComponent } from "./components/local-storage-component";
import { ToggleComponent } from "./components/toggle-component";
import { TimeoutComponent } from "./components/timeout-component";
import { DebounceComponent } from "./components/debounce-component";
import { UpdateEffectComponent } from "./components/update-effect-component";
import { ThrottleComponent } from "./components/throttle-component";
import { FetchComponent } from "./components/fetch-component";
import { HoverComponent } from "./components/hover-component";
import { ViewportSizeComponent } from "./components/viewport-size-component";
import { WindowScrollComponent } from "./components/window-scroll-component";
import { ExtendToggleComponent } from "./components/extend-toggle-component";

export const App = () => {
	return (
		<>
			<LocalStorageComponent />
			<ToggleComponent />
			<TimeoutComponent />
			<DebounceComponent />
			<UpdateEffectComponent />
			<ThrottleComponent />
			<FetchComponent />
			<HoverComponent />
			<ViewportSizeComponent />
			<WindowScrollComponent />
			<ExtendToggleComponent />
		</>
	);
};
