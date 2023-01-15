import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { handleUserLogout, setUser } from "../../store/actions/userActions";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export type HomepageProviderProps = {
  render: any;
};

const HomePageProvider = (props: HomepageProviderProps) => {
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (currentUser) {
      dispatch(handleUserLogout());
    }
  };

  console.log(currentUser, "checking");
  return props.render({
    currentUser,
  });
};

export default HomePageProvider;
