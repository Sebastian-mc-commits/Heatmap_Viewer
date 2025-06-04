export interface IAuditReportBase {

  auditId: string;
  businessName: string;
  auditDate: Date;
  auditorName?: string;
  executiveSummary: string;

  websiteAnalysis: {
    url: string;
    overallScore?: number;
    usability: {
      isMobileFriendly: boolean;
      pageLoadSpeed: {
        desktopSeconds?: number;
        mobileSeconds?: number;
        recommendations?: string[];
      };
      navigationClarity: string;
      callToActions: {
        clarity: string;
        effectiveness: string;
        suggestions?: string[];
      };
      accessibilityCompliance?: string;
    };
    designAndBranding: {
      visualAppeal: string;
      brandConsistency: string;
      suggestions?: string[];
    };
    technicalHealth: {
      sslCertificate: boolean;
      brokenLinksCount?: number;
      sitemapExists: boolean;
      robotsTxtExists: boolean;
      structuredDataMarkup?: string;
      coreWebVitals?: {
        largestContentfulPaint?: number;
        firstInputDelay?: number;
        cumulativeLayoutShift?: number;
        status: 'Good' | 'Needs Improvement' | 'Poor';
      };
    };
  };


  seoAnalysis: {
    overallSeoScore?: number;
    onPageSeo: {
      titleTags: {
        status: string;
        issues?: string[];
      };
      metaDescriptions: {
        status: string;
        issues?: string[];
      };
      headerTags: {
        status: string;
        hierarchyCorrect: boolean;
        issues?: string[];
      };
      imageAltText: {
        status: string;
        percentageOptimized?: number;
      };
      internalLinking: {
        status: string;
        suggestions?: string[];
      };
      keywordUsage: {
        primaryKeywords: string[];
        secondaryKeywords?: string[];
        keywordDensity?: string;
        keywordGapAnalysis?: string[];
      };
      urlStructure: string;
    };
    offPageSeo: {
      backlinkProfile: {
        totalBacklinks?: number;
        referringDomains?: number;
        domainAuthority?: number;
        spamScore?: number;
        linkQuality: string;
        suggestions?: string[];
      };
      localSeo?: {
        googleMyBusiness: {
          isClaimedAndVerified: boolean;
          profileUrl?: string;
          completenessScore?: number;
          accuracyOfInformation: string;
          categories: { primary: string; additional?: string[] };
          servicesOfferedListedAndDetailed: boolean;
          productsListedAndShowcased: boolean;
          attributesUsed: string[];
          postsFrequency: string;
          offersAndUpdatesUsage: string;
          qAndAStatus: {
            totalQuestions?: number;
            answeredByBusiness?: number;
            averageResponseTime?: string;
            qualityOfAnswers?: string;
          };
          reviews: {
            averageRating?: number;
            totalReviews?: number;
            responseRate?: number;
            responseTimeliness?: string;
            sentiment?: 'Overwhelmingly Positive' | 'Mostly Positive' | 'Neutral' | 'Mostly Negative' | 'Overwhelmingly Negative';
            keywordsInReviews?: string[];
          };
          photoVideoStrategy: {
            quantity?: number;
            quality?: 'High' | 'Medium' | 'Low' | 'Needs Improvement';
            relevance?: 'High' | 'Medium' | 'Low';
            types?: Array<'Logo' | 'Cover' | 'Interior' | 'Exterior' | 'Team' | 'Product' | 'CustomerGenerated'>;
            videoCount?: number;
            suggestions?: string[];
          };
          messaging: {
            isEnabled: boolean;
            responsiveness?: string;
          };
          bookingIntegration?: {
            isSetup: boolean;
            provider?: string;
            effectiveness?: string;
          };
        };
        googleMapsSpecifics?: {
          mapPinAccuracy: 'Precise' | 'Approximate' | 'Incorrect' | 'Not Found';
          streetViewPresenceAndQuality: string;
          drivingDirectionsAccuracy: boolean;
          localGuidesContributionsSummary?: string;
          impressionsOnMaps?: number;
          searchesLeadingToDiscovery?: Array<{ searchTerm: string; count?: number }>;
        };
        citations: {
          consistencyScore?: number;
          majorDirectoriesListed: string[];
          issues?: Array<{ directory: string; field: string; incorrectValue: string; correctValue: string }>;
          totalCitations?: number;
        };
        localLinkBuilding?: {
          status: string;
          localDirectoryLinks?: number;
          communitySiteLinks?: number;
          localPressMentions?: number;
          suggestions?: string[];
        };
        mapPackVisibility?: Array<{
          searchTerm: string;
          rank?: number;
          competitorsAhead?: string[];
        }>;
      };
    };
    keywordRankings?: Array<{
      keyword: string;
      currentRank?: number;
      previousRank?: number;
      searchVolume?: number;
      rankingUrl?: string;
      difficulty?: number;
      searchIntent?: 'Informational' | 'Navigational' | 'Commercial' | 'Transactional';
      isLocalKeyword?: boolean;
    }>;
  };


  contentAudit: {
    overallContentScore?: number;
    contentQuality: {
      clarityAndReadability: string;
      grammerAndSpelling: string;
      valueToAudience: string;
      originality: string;
      engagementMetrics?: string;
    };
    contentStrategy: {
      targetAudienceAlignment: string;
      contentFreshness: string;
      contentGaps?: string[];
      contentFormatVariety?: string[];
      blogPosts?: {
        averageWordCount?: number;
        publishingFrequency: string;
        engagementMetrics?: { averageComments?: number; averageShares?: number };
        keywordsTargeted?: string[];
        internalLinkingToServices?: string;
      };
      localContentStrategy?: {
        hasLocalLandingPages: boolean;
        localKeywordTargetingEffectiveness: string;
        neighborhoodGuidesOrContent: boolean;
        localEventCoverageOrParticipation: boolean;
        customerSuccessStoriesOrCaseStudiesLocalFocus: boolean;
        suggestions?: string[];
      };
    };
    callToActionsInContent: string;
    suggestions?: string[];
  };


  businessPositioningAndUspAudit?: {
    identifiedUniqueSellingPropositions: string[];
    currentUspCommunicationOnline: {
      websiteClarity: string;
      gmbDescriptionClarity: string;
      socialMediaClarity: string;
    };
    competitorDifferentiationAnalysis: string;
    customerPerceptionOfUsp?: string;
    suggestionsForHighlightingUniqueness: string[];
  };


  untappedOpportunities?: Array<{
    opportunityId: string;
    area: string;
    description: string;
    potentialBenefit: string;
    targetAudienceSegment?: string;
    recommendedActions: string[];
    estimatedEffort?: 'Low' | 'Medium' | 'High';
    potentialImpactScore?: 'Low' | 'Medium' | 'High' | 'Game-Changer';
    synergyWithGmbMaps?: string;
  }>;


  socialMediaAnalysis?: Array<{
    platform: 'Facebook' | 'Instagram' | 'Twitter' | 'LinkedIn' | 'TikTok' | 'YouTube' | 'Pinterest' | string;
    profileUrl: string;
    followerCount?: number;
    engagementRate?: number;
    postingFrequency: string;
    contentQualityAndRelevance: string;
    audienceDemographics?: string;
    brandVoiceConsistency: string;
    localEngagement?: {
      geoTargetedPostsOrAdsUsed?: boolean;
      interactionWithLocalCommunityOrEvents?: string;
      promotionOfGmbContent?: boolean;
    };
    strengths?: string[];
    weaknesses?: string[];
    recommendations?: string[];
  }>;


  competitorAnalysis?: Array<{
    competitorName: string;
    websiteUrl: string;
    gmbProfileUrl?: string;
    strengths?: string[];
    weaknesses?: string[];
    seoComparison?: {
      domainAuthority?: number;
      estimatedTraffic?: number;
      topKeywords?: string[];
      gmbReviewAverage?: number;
      gmbReviewCount?: number;
    };
    contentStrategyHighlights?: string[];
    localPresenceComparison?: string;
  }>;


  keyStrengths: Array<{
    area: string;
    description: string;
    evidence?: string;
  }>;


  areasForImprovement: Array<{
    area: string;
    description: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    specificRecommendations: string[];
    potentialImpact?: string;
    estimatedTimeToFix?: string;
    implicationIfNotAddressed?: string;
    relatedGmbMapsImpact?: string;
  }>;


  actionPlan: {
    quickWins: Array<{
      action: string;
      rationale: string;
      estimatedEffort: 'Very Low' | 'Low';
      potentialImpact: 'High' | 'Very High';
      responsible?: string;
    }>;
    shortTermGoals: Array<{
      goal: string;
      steps: string[];
      kpisToTrack?: string[];
      responsible?: string;
      timeline?: string;
    }>;
    longTermGoals: Array<{
      goal: string;
      steps: string[];
      kpisToTrack?: string[];
      responsible?: string;
      timeline?: string;
    }>;
    toolsAndResourcesSuggested?: string[];
    ongoingMonitoringRecommendations?: string;
  };


  appendix?: Array<{
    title: string;
    content: string;
  }>;
}


export const sampleAudit: IAuditReportBase = {
  auditId: 'AUDIT-2024-002-ENHANCED',
  businessName: 'Unique Local Gems',
  auditDate: new Date(),
  auditorName: 'The Insightful Auditor',
  executiveSummary: 'Unique Local Gems has a passionate local following but significant untapped potential in GMB optimization, local content strategy, and clearly communicating its unique value proposition online. Key quick wins can rapidly boost visibility.',
  websiteAnalysis: {

    url: 'https:',
    overallScore: 70,
    usability: {
      isMobileFriendly: true,
      pageLoadSpeed: { desktopSeconds: 3.0, mobileSeconds: 5.5, recommendations: ['Optimize hero image', 'Defer non-critical JS'] },
      navigationClarity: 'Good',
      callToActions: { clarity: 'Okay', effectiveness: 'Needs improvement', suggestions: ['Add clearer CTAs for consultations'] },
    },
    designAndBranding: { visualAppeal: 'Charming but slightly dated', brandConsistency: 'Good' },
    technicalHealth: { sslCertificate: true, brokenLinksCount: 1, sitemapExists: true, robotsTxtExists: true, coreWebVitals: { status: 'Needs Improvement', largestContentfulPaint: 3.5 } }
  },
  seoAnalysis: {
    overallSeoScore: 65,

    onPageSeo: {
      titleTags: { status: 'Needs keyword optimization for local terms' },
      metaDescriptions: { status: 'Generic', issues: ['Not compelling enough'] },
      headerTags: { status: 'Okay', hierarchyCorrect: true },
      imageAltText: { status: 'Partially implemented', percentageOptimized: 60 },
      internalLinking: { status: 'Weak' },
      keywordUsage: { primaryKeywords: ['local gems', 'unique gifts'], keywordGapAnalysis: ['handmade jewelry [city]', 'artisan crafts [city]'] },
      urlStructure: 'Acceptable',
    },
    offPageSeo: {
      backlinkProfile: { totalBacklinks: 80, referringDomains: 25, domainAuthority: 22, linkQuality: 'Moderate' },
      localSeo: {
        googleMyBusiness: {
          isClaimedAndVerified: true,
          profileUrl: 'https:',
          completenessScore: 75,
          accuracyOfInformation: 'Mostly accurate, phone number needs update',
          categories: { primary: 'Gift Shop', additional: ['Jewelry Store', 'Art Gallery'] },
          servicesOfferedListedAndDetailed: false,
          productsListedAndShowcased: true,
          attributesUsed: ['Wheelchair accessible entrance', 'Curbside pickup'],
          postsFrequency: 'Infrequent (monthly)',
          offersAndUpdatesUsage: 'Not utilized',
          qAndAStatus: { totalQuestions: 5, answeredByBusiness: 1, qualityOfAnswers: 'Brief' },
          reviews: { averageRating: 4.8, totalReviews: 150, responseRate: 60, sentiment: 'Overwhelmingly Positive', keywordsInReviews: ['friendly staff', 'unique items'] },
          photoVideoStrategy: { quantity: 10, quality: 'Medium', relevance: 'High', types: ['Exterior', 'Product'], suggestions: ['Add interior photos, team photos, more product variety shots'] },
          messaging: { isEnabled: true, responsiveness: 'Responds within a few hours' },
        },
        googleMapsSpecifics: {
          mapPinAccuracy: 'Precise',
          streetViewPresenceAndQuality: 'Good, recent Street View',
          drivingDirectionsAccuracy: true,
        },
        citations: { consistencyScore: 80, majorDirectoriesListed: ['Yelp', 'Google Maps'], issues: [{ directory: 'YellowPages', field: 'Phone', incorrectValue: '555-0100', correctValue: '555-0199' }] },
        localLinkBuilding: { status: 'Needs development', suggestions: ['Partner with local bloggers', 'Sponsor a community event'] },
        mapPackVisibility: [
          { searchTerm: 'gift shop [city]', rank: 5, competitorsAhead: ['Competitor A', 'Competitor B'] },
          { searchTerm: 'unique gifts [city]', rank: undefined }
        ]
      },
    },
  },
  contentAudit: {
    overallContentScore: 60,
    contentQuality: { clarityAndReadability: 'Good', grammerAndSpelling: 'Good', valueToAudience: 'Moderate', originality: 'Good' },
    contentStrategy: {
      targetAudienceAlignment: 'Okay',
      contentFreshness: 'Needs improvement, blog not updated in 3 months',
      localContentStrategy: {
        hasLocalLandingPages: false,
        localKeywordTargetingEffectiveness: 'Weak',
        neighborhoodGuidesOrContent: false,
        localEventCoverageOrParticipation: false,
        customerSuccessStoriesOrCaseStudiesLocalFocus: false,
        suggestions: ['Create landing pages for nearby towns', 'Blog about local artists featured in store'],
      },
    },
    callToActionsInContent: 'Weak',
  },
  businessPositioningAndUspAudit: {
    identifiedUniqueSellingPropositions: ['Handcrafted items by local artisans', 'Personalized customer service', 'Exclusive product lines'],
    currentUspCommunicationOnline: {
      websiteClarity: 'Moderate - USP mentioned but not prominent',
      gmbDescriptionClarity: 'Weak - Generic description',
      socialMediaClarity: 'Inconsistent',
    },
    competitorDifferentiationAnalysis: 'Key competitors focus on mass-produced items; ULG has a clear niche if communicated effectively.',
    suggestionsForHighlightingUniqueness: ['Revamp GMB description to highlight artisan focus', 'Create "Meet the Artisan" blog series', 'Use specific GMB attributes for unique offerings'],
  },
  untappedOpportunities: [
    {
      opportunityId: 'OPP-001',
      area: 'Local Workshops',
      description: 'Host "Meet the Artisan" workshops or DIY craft sessions.',
      potentialBenefit: 'Increased foot traffic, community engagement, new revenue stream, unique GMB post content.',
      recommendedActions: ['Survey customer interest', 'Partner with an artisan', 'Promote via GMB Posts and local event sites'],
      estimatedEffort: 'Medium',
      potentialImpactScore: 'High',
      synergyWithGmbMaps: 'Can be listed as events in GMB, photos/videos from workshops for GMB updates.'
    },
  ],
  keyStrengths: [
    { area: 'Customer Loyalty', description: 'High average review rating and positive sentiment.', evidence: 'GMB 4.8 stars, 150 reviews' },
    { area: 'Unique Product Sourcing', description: 'Focus on local artisans provides differentiation.' },
  ],
  areasForImprovement: [
    {
      area: 'GMB Profile Optimization',
      description: 'GMB profile is incomplete and not fully leveraged (services, posts, Q&A, attributes).',
      priority: 'Critical',
      specificRecommendations: ['Complete all GMB sections', 'Implement regular posting schedule (3x/week)', 'Actively manage Q&A', 'Utilize all relevant attributes'],
      potentialImpact: 'Significant increase in local visibility and engagement.',
      implicationIfNotAddressed: 'Missed calls, direction requests, and local customer acquisition.',
      relatedGmbMapsImpact: 'Lower ranking in Map Pack, less appealing profile to Maps users.'
    },
  ],
  actionPlan: {
    quickWins: [
      { action: 'Update GMB primary category and add all relevant additional categories.', rationale: 'Immediately improves GMB relevance for searches.', estimatedEffort: 'Very Low', potentialImpact: 'High' },
      { action: 'Respond to all unanswered GMB reviews and Q&A.', rationale: 'Shows engagement and provides helpful info.', estimatedEffort: 'Low', potentialImpact: 'High' }
    ],
    shortTermGoals: [
      { goal: 'Achieve 95% GMB profile completeness', steps: ['Fill all service fields', 'Add 10 new high-quality photos', 'Create 5 GMB posts'], timeline: 'Next 30 days' },
    ],
    longTermGoals: [
      { goal: 'Rank in Top 3 of Map Pack for "unique gifts [city]"', steps: ['Consistent GMB optimization', 'Local citation building', 'Acquire local backlinks'], timeline: 'Next 6 months' },
    ],
  },
};
