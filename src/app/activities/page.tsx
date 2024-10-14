"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { trpc } from "../../../utils/trpc";
import { useEffect, useRef } from "react";

const fetchUserActivities = async ({ pageParam = 1 }) => {
    const response = await trpc.getAllActivity.useQuery({
        page: pageParam,
        limit: 10, // Number of items per page
    });
    return response;
};

export default function Activities() {
    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(
        ['userActivities'], // Query key
        fetchUserActivities, // Fetching function
        {
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.data?.hasMore ? allPages.length + 1 : undefined;
            },
        }
    );

    const observer = useRef<IntersectionObserver | null>(null);
    const lastActivityElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (lastActivityElementRef.current) {
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            observer.current.observe(lastActivityElementRef.current);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [hasNextPage, fetchNextPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data?.pages.map((page, pageIndex) => (
                <div key={pageIndex}>
                    {page.data?.activities.map((activity, index) => {
                        const isLastElement = pageIndex === data.pages.length - 1 && index === page.data.activities.length - 1;
                        return (
                            <div key={activity.id} ref={isLastElement ? lastActivityElementRef : null}>
                                {activity.page}
                            </div>
                        );
                    })}
                </div>
            ))}
            {isFetchingNextPage && <div>Loading more...</div>}
        </div>
    );
}
