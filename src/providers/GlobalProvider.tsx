import { Profile } from "@/types/profile";
import { AuthSession } from "@supabase/supabase-js";
import { createContext, Dispatch, SetStateAction } from "react";

type GlobalContextProps = {
	session: AuthSession | null;
	profile: Profile | null;
	setProfile: Dispatch<SetStateAction<Profile | null>>;
	isResetPasswordValid: boolean;
	setIsResetPasswordValid: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextProps>(undefined!);

// export const GlobalProvider = ({ children = <Outlet /> }: Props) => {
//   const [session, setSession] = useState<AuthSession | null>(null);
//   const [profile, setProfile] = useState<Profile | null>(null);
//   const [isResetPasswordValid, setIsResetPasswordValid] = useState(false);

//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(async (event, session) => {
//       console.log(event, session);
//       if (event === "PASSWORD_RECOVERY") {
//         setIsResetPasswordValid(true);
//       }
//       setSession(session);
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const fetchProfile = useCallback(async () => {
//     const { data, error } = await supabase.from("profiles").select();
//     if (!error) {
//       setProfile(data[0]);
//     } else {
//       toast({
//         className: cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"),
//         variant: "destructive",
//         title: "Ошибка",
//         description: `Произошла ошибка при попытке загрузки профиля.`,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (!profile && session?.user.id) {
//       fetchProfile();
//     }
//   }, [profile, session?.user.id, fetchProfile]);

//   return <GlobalContext.Provider value={{ session, profile, isResetPasswordValid, setProfile, setIsResetPasswordValid }}>{children}</GlobalContext.Provider>;
// };

type Props = {
	children?: JSX.Element;
};
