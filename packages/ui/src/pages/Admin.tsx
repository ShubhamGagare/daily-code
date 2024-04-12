import { ProblemEditor } from "../ProblemEditor";
import { TracksEditor } from "../TracksEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shad/ui/tabs";
import { getAllProblems, getAllTracks } from "../../../../apps/web/components/utils";
import { LinkProblems } from "../LinkProblems";
import AutoAddTracks from "../CompleteAddTracks";

export const Admin = async () => {
  const problems = await getAllProblems();
  const tracks = await getAllTracks();
  return (
    <div className="pt-2">
      <div className="flex justify-center">
        <Tabs defaultValue="auto" className="w-full">
          <div className="flex justify-center my-2">
            <TabsList>
              <TabsTrigger value="auto">Complete Track</TabsTrigger>
              <TabsTrigger value="problems">Problems</TabsTrigger>
              <TabsTrigger value="tracks">Tracks</TabsTrigger>
              <TabsTrigger value="link">Link</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="auto">
            <AutoAddTracks />
          </TabsContent>
          <TabsContent value="problems">
            <ProblemEditor problems={problems} />
          </TabsContent>
          <TabsContent value="tracks">
            <TracksEditor tracks={tracks} />
          </TabsContent>
          <TabsContent value="link">
            <LinkProblems tracks={tracks} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
