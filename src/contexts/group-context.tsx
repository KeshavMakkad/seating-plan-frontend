import { createContext, useContext } from "react";

const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:3000";

export interface Group {
    groupName: string;
    groupMembers: string[];
}

interface GroupContext {
    groups: Record<string, Group>;
    addGroup: (group: Group) => Promise<void>;
    getGroup: (groupName: string) => Promise<Group | undefined>;
    deleteGroup: (groupName: string) => Promise<void>;
    updateGroup: (groupName: string, group: Group) => Promise<void>;
}

export const GroupContext = createContext<GroupContext>({
    groups: {},

    addGroup: async (group: Group) => {
        const response = await fetch(`${BACKEND_URL}/addGroup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                groupName: group.groupName,
                groupMembers: group.groupMembers,
            }),
        });
        if (!response.ok) {
            throw new Error("Failed to add group");
        }
    },

    getGroup: async (groupName: string) => {
        const response = await fetch(
            `${BACKEND_URL}/getGroup?groupName=${groupName}`
        );
        if (!response.ok) {
            return undefined;
        }
        const group: Group = await response.json();
        return group;
    },

    deleteGroup: async (groupName: string) => {
        const response = await fetch(
            `${BACKEND_URL}/deleteGroup?groupName=${groupName}`,
            {
                method: "DELETE",
            }
        );
        if (!response.ok) {
            throw new Error("Failed to delete group");
        }
    },

    updateGroup: async (groupName: string, group: Group) => {
        const response = await fetch(
            `${BACKEND_URL}/updateGroup?groupName=${groupName}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    groupName: group.groupName,
                    groupMembers: group.groupMembers,
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Failed to update group");
        }
    },
});
