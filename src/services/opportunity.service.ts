import { api } from "./api";

export interface Opportunity {
  id: number;
  title: string;
  customer: string;
  score: number;
  urgency: string;
  revenue: number;
}

/*
  GET ALL OPPORTUNITIES
*/

export const getOpportunities =
  async (): Promise<Opportunity[]> => {
    const response =
      await api.get('/opportunities');

    return response.data;
  };

/*
  CREATE OPPORTUNITY
*/

export const createOpportunity =
  async (
    payload: Opportunity
  ): Promise<Opportunity> => {
    const response =
      await api.post(
        '/opportunities',
        payload
      );

    return response.data;
  };

/*
  UPDATE OPPORTUNITY
*/

export const updateOpportunityApi =
  async (
    payload: Opportunity
  ): Promise<Opportunity> => {
    const response =
      await api.put(
        `/opportunities/${payload.id}`,
        payload
      );

    return response.data;
  };

/*
  DELETE OPPORTUNITY
*/

export const deleteOpportunityApi =
  async (
    id: number
  ): Promise<void> => {
    await api.delete(
      `/opportunities/${id}`
    );
  };