import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      dispatch(cleanUpCategoriesRecords());
      promise.abort();
    };
  }, [dispatch]);
  return { records, loading, error };
};

export default useCategories;
