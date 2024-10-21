// components
import Title from "../../src/components/Title";
import TitleHeader from"../../src/components/TitleHeader";
import PublicationCard from "../../src/components/PublicationCard";

export default function Publications() {
  return (
    <>
        <TitleHeader first="Publications on" second="GS-LSAMP" />

        {/* 2023 */}
        <div className="mx-auto">
            <p className="text-3xl">2023</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="When and why is faculty mentorship effective for underrepresented students in STEM? A multicampus quasi-experiment." year="2023" url="https://doi.org/10.1037/cdp0000596" authors="Kuchynka, S.L., Gates, A.E., & Rivera, L.M." source="Cultural Diversity and Ethnic Minority Psychology" />
                <PublicationCard title="S-STEM as the Culmination of a Multi-Institutional, Multi-Grant Program for the Success of Underrepresented Students" year="2023" url="https://par.nsf.gov/servlets/purl/10489987" authors="Rath, K., Xavier, J., Menier, A., Esiason, J., Gates, A., Kitanska, D., Komisaruk, B., San Miguel, C., Stein, J., Tat, F., & van Aiken, T." source="Understanding Interventions Journal 14(1)" />
            </div>
        </div>

        {/* 2022 */}
        <div className="mx-auto">
            <p className="text-3xl">2022</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="Editorial: New developments in pathways toward diversity and inclusion in STEM: A United States perspective" year="2022" url="https://doi.org/10.3389/feduc.2022.983922" authors="Gates, A.E., Gilbert, J., Botanga, C., London, B., & Nguyen, K." source="Frontiers in Education 7" />
                <PublicationCard title="Synergistic Projects with Near-Peer Mentoring to Enhance Diversity, Equity and Inclusiveness in the Geosciences in northern New Jersey" year="Dec. 2022" url="https://ui.adsabs.harvard.edu/abs/2022AGUFMED35A..05G/abstract" authors="Gates, A. E., Rouff, A., & Keating, K." source="AGU Fall Meeting Abstracts (Vol. 2022, pp. ED35A-05)" />
                <PublicationCard title="Which STEM relationships promote science identities, attitudes, and social belonging? A longitudinal investigation with high school students from underrepresented groups" year="2022" url="https://doi.org/10.1007/s11218-022-09705-7" authors="Kuchynka, S.L., Reifsteck, T., Gates, A., & Rivera, L.M." source="Social Psychology of Education 25(4): 819-843" />
                <PublicationCard title="Understanding and addressing gender-based inequities in STEM: Research synthesis and recommendations for United States K-12 education" year="2022" url="https://doi.org/10.1111/sipr.12087" authors="Kuchynka, S.L., Eaton, A., & Rivera, L.M." source="Social Issues and Policy Review 16(1):252-288" />
            </div>
        </div>

        {/* 2021 */}
        <div className="mx-auto">
            <p className="text-3xl">2021</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="Developing self-efficacy and behavioral intentions among underrepresented students in STEM: The role of active learning" year="2021" url="https://doi.org/10.3389/feduc.2021.668239" authors="Kuchynka, S.L., Reifsteck, T., Gates, A., & Rivera, L.M." source="Frontiers in Education 6:668239" />
                <PublicationCard title="Synergistic Interaction of LSAMP Alliances to Improve the Graduation and Transfer of Community College Students in New Jersey United States" year="2021" url="https://doi.org/10.3389/feduc.2021.679865" authors="San Miguel, C., & Gates, A.E." source="Frontiers in Education 6" />    
            </div>
        </div>

        {/* 2020 */}
        <div className="mx-auto">
            <p className="text-3xl">2020</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="Identity Development during STEM Integration for Underrepresented Minority Students" year="2020" url="https://doi.org/10.1017/9781108882071" authors="Kuchynka, S.L., Gates, A., & Rivera, L.M." source="Elements in Applied Social Psychology" publisher="Cambridge University Press" />
            </div>
        </div>

        {/* 2019 */}
        <div className="mx-auto">
            <p className="text-3xl">2019</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="New developments in diversity and inclusiveness in geosciences" year="2019" url="https://doi.org/10.1080/10899995.2019.1671713" authors="Gates, A. E., McNeal, K., Riggs, E., Sullivan, S., & Dalbotten, D." source="Journal of Geoscience Education 67(4):285-286" />
                <PublicationCard title="The protégé effect in the retention of underrepresented minority undergraduate teaching assistants in geoscience: Preliminary indications from Newark, New Jersey" year="2019" url="https://doi.org/10.1080/10899995.2019.1661760" authors="Gates, A. E." source="Journal of Geological Education 67(4):417-426" />
            </div>
        </div>

        {/* 2016 */}
        <div className="mx-auto">
            <p className="text-3xl">2016</p>

            <div className="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 border-t border-gray-500 pt-10">
                <PublicationCard title="The Oil Game: Generating Enthusiasm for Geosciences in Urban Youth in Newark, NJ" year="2016" url="https://doi.org/10.5408/10-164.1" authors="Gates, A. E., & Kalczynski, M. J." source="Journal of Geoscience Education 64(1):17-23" />
            </div>
        </div>
        
    </>
  );
}
  